# PoUserGuideService

**Tipo:** Serviço
**Pacote:** `@po-ui/ng-components`
**Referência:** https://po-ui.io/documentation/po-user-guide-service

Serviço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos `tourStartServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos , `stepChangeServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos `tourStartServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos ,  e `tourEndServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos `tourStartServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos , `stepChangeServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos `tourStartServiço responsável por criar e controlar tours guiados na interface da aplicação.

O `PoUserGuideService` permite apresentar uma sequência de passos visuais para orientar
o usuário durante o uso de uma tela, funcionalidade ou fluxo específico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.

O serviço centraliza a configuração do guia do usuário, incluindo:

- os passos que serão exibidos;
- as opções gerais de comportamento;
- o controle do passo ativo;
- os eventos emitidos durante o ciclo de vida do tour.

A partir dele, a aplicação pode iniciar, acompanhar e reagir à execução do tour por meio
dos eventos públicos ,  e .

Como o serviço é disponibilizado com `providedIn: 'root'`, não é necessário declará-lo em
`providers` nem importá-lo manualmente em módulos específicos. A mesma instância é
compartilhada por toda a aplicação, facilitando o controle do tour entre diferentes
componentes.

#### Uso típico

O fluxo recomendado de utilização do serviço, que pode ser encadeado fluentemente, configura os
passos do tour, ajusta opções globais e dispara a execução em uma única expressão:

```typescript
import { Component } from '@angular/core';
import { PoUserGuideService } from '@po-ui/ng-components';

@Component({ selector: 'app-onboarding', templateUrl: './onboarding.component.html' })
export class OnboardingComponent {
  constructor(private PoUserGuide: PoUserGuideService) {}

  startTour(): void {
    this.PoUserGuide
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

#### Aviso de segurança: HTML em `step.content`

O PO UI sanitiza o conteúdo HTML informado em `step.content` antes de exibi-lo no
popover* do tour, ajudando a prevenir vulnerabilidades de *Cross-Site Scripting* (XSS).

A mesma proteção é aplicada aos *labels* definidos em `PoUserGuideStep` e
`PoUserGuideOptions` quando construídos dinamicamente.

Ainda assim, recomenda-se validar conteúdos vindos de fontes não confiáveis, como entrada
do usuário, APIs externas ou *query strings*, preservando a segurança desde a origem dos dados.

#### Tokens customizáveis

É possível alterar a aparência do *popover* renderizado pelo `PoUserGuideService` através dos tokens
(CSS) consumidos pelo arquivo `po-user-guide.css` distribuído via `@po-ui/style`.

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
