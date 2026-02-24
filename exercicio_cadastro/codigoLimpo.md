### Documento de Boas Práticas: Do Caos ao Código Limpo

#### 1. Nomes Adequados (Princípio *Seiri* - Organização)

O documento menciona que utilizar abordagens como nomes adequados é crucial. Nomes confusos ou letras soltas dificultam a leitura e exigem que percas tempo a tentar adivinhar a sua intenção.

**❌ Código Errado (Confuso)**

```javascript
// O que significa 'd', 'x' e 'y'? Fica impossível saber sem um contexto externo.
function calc(d) {
    let x = d * 10;
    let y = x + 5;
    return y;
}

```

**✅ Código Correto (Limpo)**

```javascript
// Nomes que explicam a intenção exata do código.
function calcularPrecoComTaxa(precoBase) {
    let precoComImposto = precoBase * 10;
    let precoFinal = precoComImposto + 5;
    return precoFinal;
}

```

* **Explicação do Raciocínio:** Ao usar nomes descritivos nas tuas funções e variáveis, não precisas de adivinhar o que a função faz. O próprio código passa a ser a documentação!

---

#### 2. Código Livre de "Lixo" e Comentários Desnecessários (Princípio *Seiso* - Limpeza)

O autor questiona sobre o hábito de encher o código com comentários ou deixar linhas de código comentadas que informam o passado. A recomendação sobre essas linhas mortas e comentários excessivos é clara: "Livre-se deles". O local de trabalho deve estar "livre de fios pendurados".

**❌ Código Errado (Sujo)**

```javascript
function verificarMaioridade(idade) {
    // verifica se a idade é maior ou igual a 18
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
    // código antigo:
    // let result = idade > 17;
    // return result;
}

```

**✅ Código Correto (Limpo)**

```javascript
function verificarMaioridade(idade) {
    const IDADE_MINIMA_ADULTO = 18;
    return idade >= IDADE_MINIMA_ADULTO;
}

```

* **Explicação do Raciocínio:** Removemos os comentários óbvios (pois o código já diz o que faz) e apagamos completamente o código morto (o código antigo comentado). Além disso, substituímos o "número mágico" `18` por uma constante descritiva.

---

#### 3. Código no Lugar Certo (Princípio *Seiton* - Arrumação)

O texto recorda um ditado: "Um lugar para tudo, e tudo em seu lugar". Um pedaço de código deve estar exatamente onde esperamos encontrá-lo; se não estiver, a instrução é que deves refatorar o código para o colocar lá.

**❌ Código Errado (Misturado)**

```javascript
function processarPedido(pedido) {
    // 1. Valida o pedido
    if (!pedido.id) throw new Error("Sem ID");
    
    // 2. Conecta à base de dados e guarda (Mistura de responsabilidades)
    database.connect("localhost:5432");
    database.save("pedidos", pedido);
    
    // 3. Envia email ao utilizador
    smtp.send("cliente@email.com", "Seu pedido foi salvo!");
}

```

**✅ Código Correto (Organizado)**

```javascript
function processarPedido(pedido) {
    validarPedido(pedido);
    salvarPedidoNoBanco(pedido);
    enviarEmailDeConfirmacao(pedido);
}

// As funções abaixo seriam colocadas nos seus arquivos ou módulos apropriados
function validarPedido(pedido) {
    if (!pedido.id) throw new Error("Sem ID");
}

function salvarPedidoNoBanco(pedido) {
    database.save("pedidos", pedido);
}

function enviarEmailDeConfirmacao(pedido) {
    smtp.send("cliente@email.com", "Seu pedido foi salvo!");
}

```

* **Explicação do Raciocínio:** A função principal `processarPedido` agora é muito limpa e atua apenas como um "índice" do que acontece. Dividimos o código em funções menores, garantindo que cada pedaço de código faça apenas uma coisa e esteja devidamente isolado no seu lugar.

---

### Instruções e Documentação para a Tua Prática Diária

Para implementares este código e esta mentalidade nas tuas aplicações diárias, o documento também refere o princípio de *Shutsuke* (Disciplina). Isto engloba ter autodisciplina para seguir as práticas, refleti-las no trabalho e estar disposto a mudar.

Para aplicares isto com facilidade:

* **Sê Honesto:** O texto refere que devemos ser honestos com o código, com os colegas e connosco próprios sobre o estado do código. O código nunca é perfeito.
* **Dá o teu melhor:** A arquitetura e o código limpo exigem apenas honestidade e que faças o teu melhor.
* **Melhora Sempre:** Faz os possíveis para "deixar o local mais limpo do que como o encontramos", sendo aconselhado a refatorar o código antes de o verificar.

Espero que este documento ilustre de forma clara e educativa as diferenças entre o código que criámos nos passos anteriores da nossa conversa e a forma profissional de se programar! Queres tentar aplicar estes princípios e refatorar um ficheiro do teu próprio código em conjunto comigo?