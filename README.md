# BarberPro - Frontend

Bem-vindo ao repositório do frontend do **BarberPro**, um sistema SaaS desenvolvido para barbearias. Este frontend foi projetado para oferecer uma experiência de usuário moderna, intuitiva e responsiva.

---

## 📜 Descrição do Projeto

O **BarberPro** oferece às barbearias uma plataforma para gerenciar agendamentos, clientes e pagamentos. O frontend foi desenvolvido utilizando **Next.js**, com foco em performance e design acessível, garantindo uma interface agradável tanto em desktops quanto em dispositivos móveis.

---

## 🚀 Tecnologias Utilizadas

As principais ferramentas e bibliotecas utilizadas neste projeto são:

- **[Next.js](https://nextjs.org/)**: Framework React para aplicações web.
- **[React](https://react.dev/)**: Biblioteca para construção de interfaces de usuário.
- **[Chakra UI](https://chakra-ui.com/)**: Biblioteca de componentes para design responsivo e acessível.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para consumo de APIs.
- **[JWT Decode](https://github.com/auth0/jwt-decode)**: Decodificação de tokens JWT no cliente.
- **[Stripe.js](https://stripe.com/docs/js)**: Integração com Stripe para pagamentos.
- **[Framer Motion](https://www.framer.com/motion/)**: Animações fluidas e interativas.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Ícones estilizados para interfaces.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Rotas da aplicação
│   ├── _app.tsx       # Configuração global do aplicativo
│   ├── index.tsx      # Página inicial
│   └── ...            # Outras páginas
├── services/          # Configurações e consumo de APIs
├── styles/            # Estilos globais e customizações
├── utils/             # Funções utilitárias
└── public/            # Arquivos estáticos
