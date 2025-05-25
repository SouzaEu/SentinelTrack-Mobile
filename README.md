# 🛡️ SentinelTrack — Desafio Mottu

O **SentinelTrack** é um aplicativo mobile desenvolvido com **React Native (Expo)** com o objetivo de **otimizar o controle e a gestão de motos nos pátios da Mottu**.

Esta solução atende aos requisitos do **1º Sprint**, incluindo **navegação entre telas** com Expo Router, um **protótipo visual funcional** utilizando dados mockados, um **formulário com manipulação de estado** e **armazenamento local** utilizando AsyncStorage para persistência de dados.

---

## ✨ Requisitos do 1º Sprint Atendidos

- **Navegação entre telas com Expo Router**: Implementada navegação fluida entre as principais telas do aplicativo.
- **Protótipo visual funcional**: Layouts funcionais para todas as telas, demonstrando o fluxo de uso com dados mockados.
- **Formulário com manipulação de estado**: O formulário de cadastro de motos gerencia o estado dos campos e interage dinamicamente.
- **Armazenamento local com AsyncStorage**: Os dados das motos cadastradas são persistidos localmente utilizando AsyncStorage e carregados ao reiniciar o app.

---

## 🚀 Funcionalidades

### 📊 Dashboard (Tela Inicial)
- Visualização de **indicadores operacionais**.
- Atalho rápido para **cadastrar novas motos**.

### 🛵 Cadastro de Motos
- Campos obrigatórios: Modelo, Placa e Zona.
- Verificação automática de **duplicidade de placas**.

### 🗂 Organização por Zonas
- Visualização das motos por **zona do pátio**.
- Modal com **lista de motos** registradas em cada zona.
- Filtro inteligente por **modelo**, **placa** ou **ID**.
- Ícone para **exclusão rápida** de motos.

### 🔐 Login de Gestores
- Campos de autenticação: Nome, E-mail, Senha e Endereço do pátio.
- **Acesso mockado**:
  - 📧 `viniciuss@fiap.com` | 🔑 `RM556089`
  - 📧 `gabrield@fiap.com` | 🔑 `RM556972`
  - 📧 `thomaz@fiap.com`  | 🔑 `RM555323`

### 👤 Perfil do Usuário
- Visualização dos dados do **gestor**.
- Total de motos cadastradas.
- Acesso rápido às funcionalidades principais do app.

---

## 🧠 Tecnologias Aplicadas

- **React Native (Expo)**
- **AsyncStorage** (persistência de dados local)
- **React Navigation**
- **Expo Vector Icons**
- **Context API** (gestão de estado global)
- **Visão Computacional** com modelos da **Roboflow**
- **Microcontroladores ESP32** com sensores de **RSSI Wi-Fi** para localização

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório:
```bash
git clone https://github.com/SouzaEu/SentinelTrack-mobile.git
cd SentinelTrack-mobile
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto com Expo:

```bash
npm start
```

ou

```bash
npx expo start --tunnel
```

4. Escaneie o QR Code com o app Expo Go no seu celular.

---

## 👥 Integrantes

- RM: 555323 - Thomaz Oliveira Vilas Boas Bartol
- RM: 556089 - Vinicius Souza Carvalho
- RM: 556972 - Gabriel Duarte


---
