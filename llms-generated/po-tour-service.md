# PoTourService

**Tipo:** Serviço
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-tour-service

Classe abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
`tourStartClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
, `stepChangeClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
`tourStartClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
,  e `tourEndClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
`tourStartClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
, `stepChangeClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
`tourStartClasse abstrata que centraliza o estado interno e a definição dos eventos reativos do `PoTourService`,
o serviço responsável por executar *guided tours* (passo a passo guiados) sobre a interface da aplicação.

A classe atua como base do contrato público do tour: armazena a lista de passos configurada via
`setSteps`, as opções globais aplicadas via `setOptions` e o índice do passo ativo durante a execução.
Também concentra os `Subject`s internos a partir dos quais são derivados os `Observable`s públicos
,  e , garantindo que o ciclo de vida do tour seja observável de
forma consistente por toda a aplicação consumidora.

A integração efetiva com a biblioteca *Driver.js*, a manipulação do DOM e a navegação imperativa
entre passos são responsabilidades da subclasse concreta `PoTourService`. Esta classe não interage
diretamente com o DOM nem com dependências externas, o que torna o estado e as validações testáveis
de forma isolada.

#### Uso típico

O fluxo recomendado de utilização do serviço, que pode ser encadeado fluentemente, configura os
passos do tour, ajusta opções globais e dispara a execução em uma única expressão:

```typescript
import { Component } from '@angular/core';
import { PoTourService } from '@po-ui/ng-components';

@Component({ selector: 'app-onboarding', templateUrl: './onboarding.component.html' })
export class OnboardingComponent {
  constructor(private poTour: PoTourService) {}

  startTour(): void {
    this.poTour
      .setSteps([
        { element: '#header', title: 'Bem-vindo!', content: 'Esta é a barra superior.' },
        { element: '.po-menu', title: 'Menu', content: 'Acesse aqui as funcionalidades do sistema.' },
        { element: '#user-profile', title: 'Perfil', content: 'Configure suas preferências.' }
      ])
      .setOptions({ showProgress: true, allowClose: true })
      .start();
  }
}
```

#### Aviso de segurança (HTML em `step.content`)

A propriedade `content` de cada passo (`PoTourStep`) é repassada ao *popover* do *Driver.js*
como HTML, **sem sanitização adicional pelo PO UI**. Quando o conteúdo dos passos for proveniente
de fontes não confiáveis (entrada do usuário, dados retornados por APIs externas, *query strings*),
é responsabilidade da aplicação consumidora higienizá-lo previamente — preferencialmente utilizando
o `DomSanitizer` do Angular — para evitar vulnerabilidades de *Cross-Site Scripting* (XSS). O mesmo
cuidado se aplica aos *labels* informados em `PoTourStep` e em `PoTourOptions` quando construídos
dinamicamente.

#### Tokens customizáveis

É possível alterar a aparência do *popover* renderizado pelo `PoTourService` através dos tokens
(CSS) consumidos pelo arquivo `po-tour.css` distribuído via `@po-ui/style`. Os *overrides* são
aplicados no escopo da classe `.po-tour-popover`, atribuída automaticamente pelo serviço ao
`popoverClass` do *Driver.js*, evitando vazamento de estilo para outras instâncias da biblioteca
eventualmente presentes na aplicação.

> Para maiores informações, acesse o guia [Personalizando o Tema Padrão com Tokens CSS](https://po-ui.io/guides/theme-customization).

| Propriedade | Descrição | Valor Padrão |
|--------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------|
| **Overlay** | | |
| `--color-secondary-dark-60-alpha-70` | Cor do *overlay* que escurece a página durante o tour | `rgba(59, 28, 74, 0.7)` |
| **Popover** | | |
| `--color-neutral-light-00` | Cor de fundo do *popover* | `#ffffff` |
| `--color-neutral-light-20` | Cor da borda do *popover* | `#c9d2d4` |
| `--border-radius-md` | Raio dos cantos do *popover* e dos botões | `4px` |
| `--shadow-lg` | Sombra projetada pelo *popover* | `0 8px 16px rgba(0, 0, 0, 0.16)` |
| `--font-family-theme` | Família tipográfica do título, descrição, progresso e botões | `Roboto, 'Helvetica Neue', Arial, sans-serif` |
| `--color-neutral-dark-70` | Cor do texto da descrição do passo | `#2c3739` |
| `--color-neutral-dark-95` | Cor do texto do título do passo | `#1d2426` |
| `--color-neutral-mid-60` | Cor do texto do indicador de progresso e do ícone do botão fechar | `#4a5c60` |
| **Botão primário (`Próximo` / `Finalizar`)** | | |
| `--color-action-default` | Cor de fundo e da borda do botão primário | `#002a8d` |
| `--color-action-hover` | Cor de fundo e da borda do botão primário no estado *hover* | `#00368a` |
| `--color-action-pressed` | Cor de fundo e da borda do botão primário no estado *pressed* | `#001f6c` |
| **Botão secundário (`Anterior`)** | | |
| `--color-action-default` | Cor do texto e da borda do botão secundário | `#002a8d` |
| `--color-action-hover` | Cor de fundo, do texto e da borda do botão secundário no *hover* | `#00368a` |
| `--color-action-pressed` | Cor de fundo, do texto e da borda do botão secundário no *pressed* | `#001f6c` |
| **Botão terciário (`Fechar` / `X`)** | | |
| `--color-neutral-light-10` | Cor de fundo do botão fechar no estado *hover* | `#dee9eb` |
| `--color-neutral-light-20` | Cor de fundo do botão fechar no estado *pressed* | `#c9d2d4` |
| **Foco visível** | | |
| `--outline-color-focused` | Cor do *outline* aplicado a botões em foco | `var(--color-action-focus)` (`#c9357d`) |
| `--color-action-focus` | *Fallback* da cor do *outline* quando `--outline-color-focused` ausente | `#c9357d` |

Os contrastes resultantes da combinação dos tokens padrão atendem ao nível **AA** do WCAG 2.2
(mínimo 4.5:1 para texto e 3:1 para ícones). Implementação concreta e *singleton* do serviço de *guided tours* do PO UI.

Esta classe estende `PoTourBaseService` e fornece a integração efetiva com a biblioteca
Driver.js*, responsável pela renderização do *overlay*, do *popover* e pela navegação entre
os passos do tour. A biblioteca *Driver.js* é tratada como dependência opcional e carregada
sob demanda (*lazy load*) na primeira invocação de `start()`, de forma que aplicações que não
utilizam o tour não paguem o custo da biblioteca no *bundle* inicial.

Por estar anotada com `@Injectable({ providedIn: 'root' })`, a mesma instância é compartilhada
por toda a aplicação consumidora, permitindo que diferentes componentes coordenem o ciclo de
vida de um único tour sem a necessidade de declarar `providers` adicionais.
