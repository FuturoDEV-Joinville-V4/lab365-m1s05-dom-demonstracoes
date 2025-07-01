# 💻 dom-aula-1: Demonstrações de Manipulação do DOM (M1S05)

Bem-vindos ao repositório dos exemplos e demonstrações de **Manipulação do DOM (Document Object Model)** do LAB365 - SENAI!

---

## 👨‍🏫 Sobre a Aula ao Vivo

Este repositório contém os arquivos que foram utilizados e modificados **AO VIVO** durante nossa aula prática. O objetivo foi demonstrar em tempo real como o JavaScript interage com a estrutura HTML da página (o DOM) para ler, listar e modificar elementos.

As páginas HTML aqui presentes serviram como o "palco" onde aplicamos os conceitos e vimos os resultados imediatamente no navegador e no console.

---

## 📦 Conteúdo do Repositório

Aqui você encontrará as seguintes páginas de demonstração:

- **`index.html`**: Demonstra como selecionar e acessar o conteúdo de diferentes elementos HTML no DOM (texto, IDs, classes, tags).
- **`listar_elementos.html`**: Demonstra como selecionar coleções de elementos e iterar sobre eles para exibir seus conteúdos.
- **`modificar_elementos.html`**: Demonstra como alterar dinamicamente o conteúdo de texto, HTML ou o valor de elementos da página.

As pastas `styles/` e `scripts/` contêm o CSS padrão do projeto e os arquivos JavaScript (`.js`) de cada demonstração.

---

## 🚀 Como Iniciar (Clonar e Configurar)

Siga estes passos para ter o material da demonstração no seu computador:

### Pré-requisitos

- [Git](https://git-scm.com/downloads) instalado.
- [GitHub Desktop](https://desktop.github.com/) instalado (para facilitar o versionamento).
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/) instalado (nosso editor de código).

### 1. Clonar o Repositório

Você pode clonar este repositório de duas formas:

**Opção A: Via GitHub Desktop (Recomendado)**

1.  Abra o **GitHub Desktop**.
2.  Vá em `File` > `Clone repository...`.
3.  Na aba `URL`, cole o link deste repositório: `https://github.com/SEU_USUARIO_OU_ORGANIZACAO/lab365-js-dom-demonstracoes.git` (ou o link que você usou para copiar).
4.  Escolha uma `Local Path` (pasta no seu computador) onde o projeto será salvo.
5.  Clique em `Clone`.

**Opção B: Via Linha de Comando (Terminal)**

1.  Abra o seu terminal ou Prompt de Comando.
2.  Navegue até a pasta onde você quer salvar o projeto (ex: `cd C:\Projetos`).
3.  Execute o comando:
    ```bash
    git clone [https://github.com/SEU_USUARIO_OU_ORGANIZACAO/lab365-js-dom-demonstracoes.git](https://github.com/SEU_USUARIO_OU_ORGANIZACAO/lab365-js-dom-demonstracoes.git)
    ```
4.  Entre na pasta do projeto recém-clonado:
    ```bash
    cd lab365-js-dom-demonstracoes
    ```

### 🚨 **MUITO IMPORTANTE: Configurando SEU Repositório Remoto!** 🚨

Se a sua intenção é **clonar este repositório para fazer suas próprias anotações, modificações ou usar como base para um projeto pessoal** e depois enviá-las para a sua própria conta no GitHub, você precisa reconfigurar o `remote` (o endereço para onde o Git envia suas mudanças).

#### **Passo a Passo para o seu Repositório Pessoal (GitHub Desktop):**

1.  **Crie um Novo Repositório Vazio no seu GitHub:**

    - Acesse o GitHub (github.com) e faça login.
    - Clique no botão `+` (canto superior direito) e depois em `New repository`.
    - Dê um nome para o seu novo repositório (ex: `meus-demos-dom` ou `anotacoes-dom-lab365`).
    - **IMPORTANTE:** Deixe as opções `Add a README file`, `Add .gitignore` e `Choose a license` **DESMARCADAS**. Queremos um repositório _totalmente vazio_.
    - Clique em `Create repository`.
    - Copie a URL HTTPS do seu **novo repositório vazio** (ex: `https://github.com/SEU_NOME_DE_USUARIO/meus-demos-dom.git`).

2.  **Remover o Remote Original (no GitHub Desktop):**

    - No GitHub Desktop, selecione o repositório `lab365-js-dom-demonstracoes` (o que você acabou de clonar).
    - Vá em `Repository` > `Repository Settings...` (Configurações do Repositório).
    - Na aba `Remotes`, você verá o `origin` apontando para o repositório original.
    - Selecione `origin` e clique em `Remove`. Confirme a remoção.

3.  **Adicionar o seu Novo Remote (no GitHub Desktop):**

    - Ainda em `Repository Settings...` > `Remotes`, clique em `Add Remote`.
    - Em `Remote name`, digite `origin` (é o nome padrão e mais comum).
    - Em `URL`, cole a URL HTTPS do **seu novo repositório vazio** que você criou no passo 1.
    - Clique em `Add Remote`.

4.  **Publicar suas Alterações (Primeiro Push):**
    - No GitHub Desktop, você verá uma mensagem para `Publish repository` ou `Push origin`. Clique nela.
    - Confirme que está enviando para o seu novo repositório.

Agora, todos os seus `pushes` irão para o seu próprio repositório!

### 2. Abrir no VS Code e Visualizar no Navegador

1.  Abra o **VS Code**.
2.  Vá em `File` > `Open Folder...` e selecione a pasta `lab365-js-dom-demonstracoes` que você clonou.
3.  Para visualizar as demonstrações, clique com o botão direito no arquivo `recuperar_elementos.html` e escolha `Open with Live Server` (se você tiver a extensão Live Server instalada) ou simplesmente arraste o `recuperar_elementos.html` para o seu navegador.
4.  **Atenção:** Mantenha o **Console do navegador** (geralmente `F12` ou `Ctrl+Shift+I` e clique na aba `Console`) aberto para ver as mensagens dos scripts e os resultados das demonstrações!

---

## 💡 Acessando o Código da Demonstração (Versão Final)

Durante a aula, modificamos os arquivos JavaScript (`.js`) de cada página para demonstrar a interação com o DOM.

Para ver o código **final e funcional** que foi desenvolvido ao vivo, por favor, mude para a branch `aula-ao-vivo-dom`:

```bash
# No terminal, dentro da pasta do projeto clonado
git checkout aula-ao-vivo-dom
```
