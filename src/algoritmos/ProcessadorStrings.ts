export class ProcessadorStrings {
  /**
   * Dada uma string str, encontra o tamanho da substring mais longa
   * sem repetir nenhum caractere.
   *
   * Exemplo 1:
   *
   * Entrada: str = "abcabcbb"
   * Saída: 3
   * Explicação: A resposta é "abc", cujo tamanho é 3.
   *
   * Exemplo 2:
   *
   * Entrada: str = "bbbbb"
   * Saída: 1
   * Explicação: A resposta é "b", cujo tamanho é 1.
   *
   * Exemplo 3:
   *
   * Entrada: str = "pwwkew"
   * Saída: 3
   * Explicação: A resposta é "wke", cujo tamanho é 3.
   *
   * @param str a string de entrada
   * @returns O tamanho da substring mais longa sem repetir
   * nenhum caractere.
   */
  calcularTamanhoDaSubstringMaisLonga(str: string): number {
    const initString = new Map<string, number>();

    let indicePosition = 0;
    let lengthStr = 0;

    for (let stringProcess = 0; stringProcess < str.length; stringProcess++) {
      if (initString.has(str[stringProcess])) {
        indicePosition = Math.max(indicePosition, initString.get(str[stringProcess]) + 1);
      }

      initString.set(str[stringProcess], stringProcess);

      lengthStr = Math.max(lengthStr, stringProcess - indicePosition + 1);
    }

    return lengthStr;
  }

  /**
   * Dada uma string str, retorna a substring palíndromica mais longa.
   *
   * Exemplo 1:
   *
   * Entrada: str = "babad"
   * Saída: "bab" ("aba" também é uma resposta válida)
   *
   * Exemplo 2:
   *
   * Entrada: str = "cbbd"
   * Saída: "bb"
   *
   * @param str a string de entrada
   * @returns A substring palíndromica mais longa.
   */
  encontrarSubstringPalindromicaMaisLonga(str: string): string {
    if(str.length === 0) {
      return "";
    }

    let initSubStr = 0;
    let lenghtMax = 1;

    for (let i = 0; i < str.length; i++) {
      // Expande para palíndromos com centro único (ex: "aba")
      let initString = i, stringProcess = i;
      while (initString >= 0 && stringProcess < str.length && str[initString] === str[stringProcess]) {
          if (stringProcess - initString + 1 > lenghtMax) {
              initSubStr = initString;
              lenghtMax = stringProcess - initString + 1;
          }
          initString--;
          stringProcess++;
      }
  }
  return str.slice(initSubStr, initSubStr + lenghtMax);
}
