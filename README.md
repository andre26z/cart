PROJETO EM PRODUÇÃO:

https://payment-system-two.vercel.app/

## INSTALAÇÃO DO PROJETO

git clone https://github.com/andre26z/cart.git
cd para a pasta que você clonou o projeto.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start do server de desenvolvimento dev `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
###  DESCRIÇÃO DO APLICATIVO

Esse aplicativo se trata de um carrinho de compras com exemplos mock e a inclusão de três sistemas de pagamento
- Cada sistema de pagamento possui seus próprios funcionamentos e regras.
- Podemos adicionar e retirar itens do carrinho apenas enquanto estamos no passo 1, após o passo 1 a lista de produtos fica desabilitada impossibilitando a adição de novos itens
- Inputs de cartão de crédito possuem regras reais e o formulário só pode ser submetido com a compreensão de todas essas regras
- QR CODE e a função de copiar código do boleto funcionam de forma real porém com exemplos mock
- A coluna de números de passos funciona corretamente, último passo só é alcançado com o pagamento e retorna ao estado inicial caso o usuário volte às escolhas dos produtos.



