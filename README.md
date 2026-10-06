# Auto Center Veloz

Site da oficina **Auto Center Veloz** com acompanhamento do veículo e aprovação digital de orçamentos. Projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas.

> Todos os dados (clientes, placas, valores) são **fictícios**, criados apenas para demonstração.

**Link publicado:** `https://SEU-USUARIO.github.io/autocenter-veloz/` *(substitua após publicar)*

## 1. Sobre o projeto
Site responsivo com páginas institucionais (Início, Serviços, Contato), uma página de **acompanhamento do veículo** para o cliente e uma **área da equipe** com painéis para recepção, mecânicos e gerência.

## 2. Contexto
A Auto Center Veloz faz manutenção preventiva e corretiva, tem boa reputação técnica e a seguinte equipe: Eduardo (gerente), Henrique (financeiro e compras), 6 mecânicos, 2 recepcionistas e 5 elevadores. Concorre com concessionárias (preço maior, relatórios digitais) e oficinas informais (menos estrutura).

## 3. Problema identificado
- Orçamentos impressos e autorização de peças por telefone ou mensagem.
- Recepção sobrecarregada com ligações sobre status do veículo.
- Mecânicos interrompidos para dar informações e tirar fotos de peças.
- Clientes demoram a aprovar, deixando carros parados nos elevadores.
- Com o crescimento da frota, risco de perda de eficiência e avaliações negativas.

## 4. Objetivo
Unir a confiança técnica da oficina a uma comunicação rápida e transparente, reduzindo o tempo de permanência dos veículos no pátio.

## 5. Solução proposta
Um **site responsivo** com duas partes:
1. **Parte pública:** apresenta a oficina e permite que o cliente, com o número da OS e a placa, veja o status em etapas, o orçamento digital, as fotos das peças, aprove ou recuse item a item e consulte o histórico de andamento.
2. **Área da equipe:** abertura de OS, envio de orçamento, registro de peças e fotos, e visão geral do pátio.

## 6. Justificativa da solução
- **Por que um site e não um aplicativo?** O cliente usa o serviço poucas vezes. Baixar um aplicativo para aprovar um orçamento é uma barreira que atrasa justamente a aprovação. Um link abre direto no navegador do celular.
- **Por que não só um painel interno?** Um painel ajuda a gerência, mas não resolve as ligações nem a demora do cliente.
- **Por que a combinação?** A dor nasce na comunicação com o cliente, e o cliente só se beneficia se a equipe também registrar as informações.
- **Ligações e interrupções:** o status e as fotos ficam disponíveis o tempo todo, então o cliente deixa de ligar e o mecânico deixa de explicar.
- **Aprovação mais rápida:** orçamento com foto, valor e botões "Aprovar/Recusar", sem papel e sem telefone. Aprovada a última pendência, o serviço segue automaticamente.

## 7. Público-alvo
Clientes da oficina, recepcionistas, mecânicos e gerência (Eduardo). O financeiro (Henrique) acompanha valores aprovados e pendentes no painel da gerência.

## 8. Funcionalidades
**Essenciais (implementadas no MVP)**
- Páginas Início, Serviços e Contato
- Consulta por número da OS + placa
- Status em etapas e histórico de andamento
- Orçamento digital com fotos, aprovar/recusar por item ou todos
- Recepção: abrir OS, enviar orçamento, lembrar cliente, registrar entrega, quadro por status
- Mecânico: ver serviços atribuídos, registrar peças/serviços com foto (demonstrativa), observações, concluir serviço
- Gerência: indicadores, ocupação dos 5 elevadores, orçamentos parados

**Versão futura**
- Backend com banco de dados e login por perfil
- Envio real de link por WhatsApp/SMS/e-mail
- Upload de fotos reais, histórico completo do veículo, PDF do orçamento
- Previsão de conclusão automática e pesquisa de satisfação

**Desnecessárias neste projeto**
- Emissão fiscal, controle de estoque, agendamento online e pagamentos (fora do escopo do briefing)

## 9. Tecnologias utilizadas
HTML5, CSS3 e JavaScript puro (sem frameworks e sem build). Motivo: simples de entender, de executar e de publicar no GitHub Pages. Os dados ficam no `localStorage` do navegador.

## 10. Arquitetura
- **Camada de dados** (`data.js`): dados demonstrativos e `seed()`.
- **Camada de lógica** (`app.js`): estado, regras (ex.: todos os itens respondidos muda o status) e ações.
- **Camada de apresentação** (`app.js` + `style.css`): páginas geradas a partir do estado, navegação por `#/rota`.
- **Fluxo:** ação do usuário → altera o estado → salva no `localStorage` → atualiza a página.
- **Sem APIs externas.** Em uma versão real, o `localStorage` seria trocado por uma API REST.

## 11. Estrutura do projeto
```
autocenter-veloz/
├── index.html
├── style.css
├── src/
│   └── js/
│       ├── data.js
│       └── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## 12. Páginas
`#/` (início), `#/servicos`, `#/acompanhar`, `#/contato`, `#/cliente/1042` (acompanhamento de uma OS), `#/equipe`, `#/recepcao`, `#/mecanico`, `#/gerencia`.
*(Adicione aqui prints das telas em uma pasta `docs/`.)*

## 13. Como executar localmente
Não precisa instalar nada. Abra `index.html` no navegador, ou, na pasta do projeto:
```bash
python -m http.server 8000
```
e acesse `http://localhost:8000`.

## 14. Dados demonstrativos
6 ordens de serviço fictícias. Para testar o fluxo completo: em "Acompanhar veículo", entre com **OS 1042** e **placa ABC1D23**, aprove os itens e depois veja a mudança na área da equipe (Recepção e Gerência). O link "restaurar dados de demonstração" no rodapé reinicia tudo.

## 15. Melhorias futuras
Backend e autenticação, notificações reais, fotos reais, relatórios, histórico por veículo, testes automatizados.

## 16. Considerações finais
O projeto ataca a causa do problema, a falta de comunicação rastreável com o cliente, e não apenas seus sintomas. As metas esperadas (menos ligações, aprovação mais rápida, melhor rotatividade dos elevadores) são hipóteses de projeto e não resultados medidos.

## Licença
MIT. Veja o arquivo [LICENSE](LICENSE).