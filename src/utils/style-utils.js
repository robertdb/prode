import { css } from 'styled-components';

export const extraSmall = {
  handheld: (...args) => css`
    @media (max-width: 576px) {
      ${ css(...args) }
    }
  `
}

/* Nombre provisorio, seria un sm respetando la grilla de bootstrap*/
export const mobileSmall = {
  handheld: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `
}

export const tablet = {
  handheld: (...args) => css`
    @media (max-width: 990px) {
      ${ css(...args) }
    }
  `
}

export const desktop = {
  handheld: (...args) => css`
    @media (max-width: 990px) and (max-width: 1200px){
      ${ css(...args) }
    }
  `
}

export const desktopLarge = {
  handheld: (...args) => css`
    @media (min-width: 1200px) {
      ${ css(...args) }
    }
  `
}
