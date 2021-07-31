# Tools computer nodejs

Conjunto de ferramentas de informações e manipulação do hardware e de redes feita em nodejs

## 🚀 Começando

### 📋 Pré-requisitos

Este projeto é feito utilizando unico e exclusivamente nodejs na versão 14.17.2^

```
pacman -S nodejs npm  // archLinux
pkg install node      // freeBSD
choco install nvs     // windows
brew install node     // macOS
pkg install nodejs    // android


// debian
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

// ubuntu

curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

```

### 🔧 Instalação

O projeto está disponivel via NPM!

```
npm i tools-computer-nodejs
```

ou pelo github.

```
git clone https://github.com/The-Kevin/tools-computer-nodejs/
```

## ⚙️ utilização

# network

O modulo network se trata de um conjunto de funções voltadas a area de redes.

```
network.getHostName()
```

obtem o nome do host interno de sua maquina.

assim como o getInterfaces(), que obtem informações das interfaces da maquina.

```
network.getInterfaces()
```

a função resolveDns() faz a resolução de nome, informando qual o IP de uma determinada url.

```
network.resolveDns('www.github.com')
    // 20.201.28.151

```

a função getDns() retorna os endereços DNS usados pela maquina.

```
network.getDns()
```

a função sendUpdPacket() envia um pacote no protocolo UDP (versão 4) contendo uma mensagem.

```
network.sendUpdPacket('192.168.0.1', 'hello world!')
```

a função sendHttpMessage() cria um micro servidor http em uma porta especificada e retorna uma mensagem padrão.

```
network.sendHttpMessage('hello dude!', '4000')
```

a função blockAddress() bloqueia um endereço IP especifico.

```
network.blockAddress('192.168.0.100')
```

## 📦 Desenvolvimento

O projeto é um passatempo, aberto para que qualquer usuario possa sugerir alterações e features novas!
sinta-se a vontade.

## 🖇️ Colaborando

```
git clone https://github.com/The-Kevin/tools-computer-nodejs/

git checkout -b $SUA_BRANCH

git push --set-upstream $SUA_BRANCH

```

## IMPORTANTE

Por gentileza, siga os padrões impostos pelo prettier e ESLINT

```
npm run lint
```

## ✒️ Autores

```
Kevin Almeida  \\ @The-Kevin \\ kevin.almeida1111.ka@gmail.com

```

---
