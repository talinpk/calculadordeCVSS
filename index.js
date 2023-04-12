function calcularCVSS(event) {
    event.preventDefault();
    const gravidade = document.getElementById('gravidade').value;
    const explorabilidade = document.getElementById('explorabilidade').value;
    const impacto = document.getElementById('impacto').value;
  
    const pontuacaoBase = ((0.6 * gravidade) + (0.4 * impacto) - 1.5) * (explorabilidade / 10);
  
    const pontuacaoCVSS = Math.round((pontuacaoBase + Number.EPSILON) * 10) / 10;
  
    const cvssScore = document.getElementById('cvss-score');
    cvssScore.innerHTML = `A pontuação CVSS é: ${pontuacaoCVSS}`;
    
}
 

const calcularBtn = document.getElementById('calcular');
calcularBtn.addEventListener('click', calcularCVSS);

function calcular() {
    // código para calcular a pontuação do CVSS
  
    // criar um array com os dados da planilha
    const data = [
      ['Gravidade', 'Explorabilidade', 'Impacto', 'Pontuação CVSS'],
      [gravidade, explorabilidade, impacto, pontuacaoCVSS]
    ];
  
    // criar o nome do arquivo e o objeto workbook
    const nomeArquivo = 'score-cvss.xlsx';
    const workbook = XLSX.utils.book_new();
  
    // criar a planilha e adicioná-la ao workbook
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Pontuações');
  
    // salvar a planilha no computador do usuário
    XLSX.writeFile(workbook, nomeArquivo);
  }