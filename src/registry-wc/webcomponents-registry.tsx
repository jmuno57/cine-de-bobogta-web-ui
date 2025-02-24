import { applyPolyfills, defineCustomElements, JSX as LocalJSX } from '@npm-bbta/bbog-dig-dt-webcomponents-lib/loader';

import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { tag } from './../core/shared/utils/sherpa-tagged-components';

type StencilProps<T> = {
  [P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
};

type ReactProps<T> = {
  [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<T = LocalJSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> & ReactProps<U>;

declare global {
  /* eslint-disable  @typescript-eslint/no-namespace */
  export namespace JSX {
    /* eslint-disable  @typescript-eslint/no-empty-interface */
    interface IntrinsicElements extends StencilToReact {}
    /* eslint-disable  @typescript-eslint/no-empty-interface */
    // @ts-ignore
    export interface IntrinsicElements extends React.JSXElementConstructor<any> {
      [key: string]: any;
    }
  }
}

applyPolyfills().then(() =>
  defineCustomElements(window, {
    transformTagName: (tagName: any) => `${tag}-${tagName}`
  } as any)
);
applyPolyfills().then(() => {
  defineCustomElements(window).then();
});
