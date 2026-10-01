# Plano de implementação — Bruni Estética Automotiva

## 1. Briefing e escopo aprovados

- Empresa: Bruni Estética Automotiva, atendimento de estética automotiva em São José dos Campos, SP.
- Serviços prioritários: polimento técnico, higienização veicular e vitrificação. Lavagem completa aparece como serviço complementar confirmado no perfil do Google.
- Público: motoristas da região que desejam cuidar da aparência e da limpeza do carro.
- Objetivo: contato para orçamento no WhatsApp (12) 98120-9568, com mensagem identificando origem no site.
- Escopo: uma landing page estática, responsiva e acessível, sem formulário, backend, preços ou agendamento online. Sem publicação nesta etapa.
- Direção aprovada: mistura de hierarquia cinematográfica, acentos de alto contraste e narrativa de rolagem, com efeitos leves de cursor e abertura rápida, para uma identidade própria da Bruni.

## 2. Fontes e referências

- [Perfil da Bruni no Google](https://www.google.com/search?q=Bruni+Est%C3%A9tica+Automotiva+S%C3%A3o+Jos%C3%A9+dos+Campos&udm=local): endereço, telefone, serviços e fotos filtradas em **Do proprietário**. O usuário autorizou usar essas fotos.
- [Instagram](https://www.instagram.com/bruniesteticaautomotiva/) e [Facebook](https://www.facebook.com/bruniesteticaautomotiva): links oficiais fornecidos; acesso direto à galeria indisponível durante a pesquisa.
- [CEO Mobile Detailing por Volts](https://voltsconsulting.com/project/ceo-mobile-detailing/): hierarquia da primeira tela e sensação de movimento. Adaptar a interação do ponteiro e a abertura rápida sem copiar a identidade.
- [Automotive Detailing no Dribbble](https://dribbble.com/shots/27154277-Automotive-Detailing-Website-Dark-Mode-Landing-Page-UI): tipografia forte, contraste e acento pontual. É inspiração visual, não template de código.
- [Jimbo Wash](https://atlas-studio.eu/work/jimbo-wash): fluxo de serviços até WhatsApp e narrativa em uma página. Evitar seções e efeitos que não ajudam a Bruni.

## 3. Inventário de imagens e mapa

Arquivos locais em `public/images/` e origens exatas em `ASSET_SOURCES.md`.

| Arquivo | Conteúdo | Proporção de origem | Uso | Limite |
| --- | --- | --- | --- | --- |
| `polimento.webp` | profissional polindo carro preto | 1200 × 676 | hero e chamada do processo | Enquadramento horizontal, não cortar rosto ou ferramenta. |
| `honda.webp` | Honda preto no espaço da Bruni | 765 × 1020 | trabalho realizado | Retrato; não ampliar para fundo largo. |
| `classico.webp` | veículo clássico verde | 1020 × 1020 | acervo de trabalhos | Foto externa, uso editorial. |
| `higienizacao.webp` | registro lado a lado de banco antes e depois | 1020 × 1020 | serviço de higienização | A composição já contém comparação; manter inteira e não alterar o resultado. |

As fotos vieram da coleção **Do proprietário** no Google. São versões de visualização, não arquivos originais da câmera; podem ser trocadas futuramente por originais sem redesenhar a página. Não usar fotos de outras empresas, IA ou banco de imagens como resultados reais.

## 4. Estrutura e copy

1. Navegação curta: serviços, trabalhos, localização e botão de orçamento.
2. Hero: “Seu carro merece voltar a impressionar.” Subtexto sobre polimento, higienização e vitrificação em São José dos Campos; CTA para orçamento e foto real do polimento.
3. Faixa de serviço: os três serviços com descrições objetivas e links de WhatsApp específicos.
4. Trabalhos reais: galeria editorial com as fotos de carros e higienização; link para o Instagram.
5. Chamada sobre o cuidado com os detalhes: foto do processo, sem números ou garantias inventados.
6. Localização e contato: Av. Salinas, 245, Bosque dos Eucaliptos; mapa externo, WhatsApp e redes sociais.

No telefone, a mensagem e o CTA aparecem antes da foto. A galeria e os serviços seguem em leitura vertical, com CTA de contato acessível ao longo da navegação. No desktop, a primeira tela divide texto e fotografia; os serviços usam linhas editoriais e a galeria usa tamanhos variados. Mensagens do WhatsApp começam com “Olá! Vim pelo site da Bruni...” e incluem o serviço quando aplicável.

## 5. Sistema visual

- Grafite `#111412`, off-white `#f2eee7`, amarelo `#f3c41b` visto na comunicação da Bruni e cinza metálico `#a8ada8`. O laranja da oficina aparece apenas nas fotografias.
- Tipografia: família condensada para títulos, sans legível para corpo. Fontes locais ou de provedor estável, com fallback.
- Grid máximo de 1280 px, margens fluidas, ritmo de seção amplo no desktop e compacto no telefone.
- Marcadores numéricos, linhas de oficina e recortes de foto assimétricos; evitar grade repetida de cards.
- Ações com papéis distintos: chamada principal em uma peça amarela recortada com canal do WhatsApp visível; navegação interna como indicador vertical de percurso; serviços com rótulos específicos e motivos gráficos ligados ao polimento, interior e proteção. Links informativos usam texto direto, sem a mesma seta repetida.
- Microinterações CSS: hover, deslocamento do brilho com ponteiro apenas em `pointer:fine`, transição de entrada curta que não bloqueia conteúdo. Respeitar `prefers-reduced-motion`.
- Controles com foco visível, áreas de toque de ao menos 44 px, contraste legível.

## 6. Stack e arquitetura

- Astro 7 + TypeScript e CSS próprio, saída estática.
- `src/pages/index.astro`: página semântica e metadados.
- `src/styles/global.css`: tokens, layout, responsividade e movimento.
- `src/scripts/effects.ts`: cursor e abertura progressiva com fallback sem JavaScript.
- `public/images/`: fotos locais convertidas para WebP; sem dependência de URL temporária do Google.
- Domínio/canonical: não definidos, pois o pedido não incluiu publicação. Configurar antes de publicar.

## 7. Etapas e aceite

1. Obter e otimizar fotos autorizadas; conferir dimensões, aparência e origem.
2. Criar estrutura Astro e conteúdo fiel aos fatos confirmados.
3. Aplicar direção visual, efeitos de ponteiro e abertura com fallback.
4. Conferir CTAs, âncoras, redes e mapa.
5. Executar build e inspecionar a página construída em telefone e desktop.

Aceite: página sem overflow lateral, fotos reais carregando localmente, textos legíveis, navegação por teclado, CTAs corretos e funcionamento sem depender das animações.

## 8. Validação

- Build estático e checagem de TypeScript.
- Revisão visual em 320, 360, 390 e 430 px, tablet e desktop.
- Verificar primeira dobra, recortes, imagem de comparação sem corte, âncoras, teclado, foco e movimento reduzido.
- Conferir links de WhatsApp com origem “site”, Instagram, Facebook e rotas.
- Não declarar desempenho ou acessibilidade completos sem auditoria medida.
