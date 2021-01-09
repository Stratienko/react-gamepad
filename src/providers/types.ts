export type ProviderChildren<ProvidedProps> = {
  children: (provided: ProvidedProps) => JSX.Element;
};

export type ProviderComponent<OwnProps = unknown, ProvidedProps = unknown> = (
  props: OwnProps & ProviderChildren<ProvidedProps>,
) => JSX.Element | null;
