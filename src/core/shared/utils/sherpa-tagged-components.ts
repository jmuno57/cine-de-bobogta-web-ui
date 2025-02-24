import { JSX } from '@npm-bbta/bbog-dig-dt-webcomponents-lib/loader';

import { createReactComponent } from '@npm-bbta/bbog-dig-dt-webcomponents-lib/dist/react-component-lib';

export const tag = 'collection';

export const CollectionBdbAtToast = createReactComponent<JSX.BdbAtToast, HTMLBdbAtToastElement>(`${tag}-bdb-at-toast`);

export const CollectionBdbAtBackdrop = createReactComponent<JSX.BdbAtBackdrop, HTMLBdbAtBackdropElement>(
  `${tag}-bdb-at-backdrop`
);
export const CollectionListBdbMlModal = createReactComponent<JSX.BdbMlModal, HTMLBdbMlModalElement>(
  `${tag}-bdb-ml-modal`
);

export const CollectionBdbAtCheckButton = createReactComponent<JSX.BdbAtCheckButton, HTMLBdbAtCheckButtonElement>(
  `${tag}-bdb-at-check-button`
);

export const CollectionBdbAtDropdown = createReactComponent<JSX.BdbAtDropdown, HTMLBdbAtDropdownElement>(
  `${tag}-bdb-at-dropdown`
);
export const CollectionBdbAtInput = createReactComponent<JSX.BdbAtInput, HTMLBdbAtInputElement>(`${tag}-bdb-at-input`);
export const CollectionBdbAtLogo = createReactComponent<JSX.BdbAtLogo, HTMLBdbAtLogoElement>(`${tag}-bdb-at-logo`);
export const CollectionBdbMlHeaderBv = createReactComponent<JSX.BdbMlHeaderBv, HTMLBdbMlHeaderBvElement>(
  `${tag}-bdb-ml-header-bv`
);
export const CollectionBdbMlLoader = createReactComponent<JSX.BdbMlLoader, HTMLBdbMlLoaderElement>(
  `${tag}-bdb-ml-loader`
);
export const CustomerResultBdbAtAutoComplete = createReactComponent<
  JSX.BdbAtAutocomplete,
  HTMLBdbAtAutocompleteElement
>(`${tag}-bdb-at-autocomplete`);
export const CollectionBdbMlSideBar = createReactComponent<JSX.BdbMlSidebar, HTMLBdbMlSidebarElement>(
  `${tag}-bdb-ml-sidebar`
);