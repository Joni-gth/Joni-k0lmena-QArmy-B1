@Smoke
Feature: Navegación pagina K0lmena
    Scenario: Verificar que se pueda navegar la página de K0lmena
        Given El usuario está en la pagina de K0lmena
        When El usuario cliquea el link de changelog
        And El usuario cliquea la version 2.0
        Then El usuario ve la informacion de la version 2.0