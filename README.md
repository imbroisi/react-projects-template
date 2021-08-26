# Guia de configuração dos projetos React.

Este repositório tem por finalidade disponibilizar um template para criação de novos projetos de frontend React.

## Node
Para desenvolver um projeto React é necessário ter o Node instalado em sua máquina, preferencialmente umaversão LTS. Quando da criação deste documento, a versão LTS era:
```javascript
v12.18.1
```
Para saber a sua versão atual do Node:
```javascript
node --version
```
Detalhes de instalação e atualização do Node podem ser vistos no [site oficial](https://nodejs.org).


Você pode também usar o gerenciador de versão do Node (nvm) caso haja em seu ambiente projetos que usam versões diferentes do Node. Para tal, veja as orientações no site do [nvm](https://github.com/nvm-sh/nvm).

## O que constitui este template
Este template tem como base o [CRA](https://create-react-app.dev/) (Create React App), além de bibliotecas para o desenvolvimento de projetos **Frontend**. É recomendado não substituir, nem deixar de utilizar, qualquer uma das bibliotecas e configurações deste template em novos projetos. Caso haja necessidade, consulte os responsáveis pelo **Desenvolvimento** antes de qualquer mudança.

Estas são a bibliotecas utilizadas:
### Lint
Usamos o [ESLint](https://eslint.org/) (v7.23.0).

### Code Style Guide
O ESlint está configurado com o [Airbnb Javascript](https://github.com/airbnb/javascript) e [Airbnb React](https://github.com/airbnb/javascript/tree/master/react).

### Testes
Testes unitários serão feitos com [React Testing Library](https://testing-library.com/). Os arquivos de testes ficarão dentro de um diretório `__tests__` por componente, ou por grupo de componentes da mesma espécie.

### Components styling
Usaremos [Styled Components](https://styled-components.com/), que é uma biblioteca *CSS-in-JS*. Note que não usaremos CSS, SCSS nem LESS; todo e qualquer configuração de estilo será feita exclusivamente com **Styled Components**.

### Tipagem
A princípio usaremos tipagem dinâmica com [PropTypes](https://www.npmjs.com/package/prop-types), devido à maior velocidade de implantação. Caso se sinta a necessidade de uma tipagem estática, poderemos estudar a possibilidade de se usar [Flow](https://flow.org/en/docs/react/), caso a caso.

### UI Framework
Usaremos [Material UI](https://material-ui.com/) como base para desenvolvimento UI dos componentes.

### Pré commit
Automaticamente será verificado, na fase de commit, tanto o ESLint quanto os testes unitários. Não faça o commit sem esta verificação, ou seja, **não use** a flag `--no-verify` durante o commit.

### Class Components vs Functional Components
Usaremos exclusivamente Functional Components em nossos projetos.

### Gerencimento global de estado
Usaremos `context` e `hooks` para esse fim, ao invés de bibliotecas externas. **IMPORTANTE: não usaresmo Redux, nem Mobix, nem qualquer biblioteca para gerenciamento global de estado**. A utilização de bliblitecas externas seria uma excessão, e precisaria de autorização dos responsáveis pelo desenvolvimento.

### Organização dos diretórios de componentes
Cada diretório de componentes terá o nome do componente, e dentro dele teremos basicamente um arquivo `index.jsx` com o componente, e um arquivo `styles.js` com o conteúdo de estilo (Styled Component).
```javascript
|___ MyComponentName
|    |__________ index.jsx
|    |__________ styles.js
|
```

### Como rodar este template
Tanto este template quando os projetos dele derivados devem ter todas as dependências (exceto o Node) dentro do arquivo `package.json`, para serem instaladas localmente. **Nunca use uma dependência instalada fora do projeto (globalmente)**.
Desta forma, tanto este template quando projetos dele derivados, devem ser instalados e executados com apenas estes comandos:
```javascript
git clone git@gitlab.com:imbroisi/react-projects-template.git
cd react-projects-template
npm install
npm start
```

## License
[MIT](https://choosealicense.com/licenses/mit/) (**VERIFICAR QUAL LICENÇA SERÁ USADA**)
