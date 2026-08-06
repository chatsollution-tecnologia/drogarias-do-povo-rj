export interface Store {
  id: string;
  name: string;
  banner: 'Exclusiva' | 'Drogaria Meta';
  bannerLogo: string;
  razaoSocial: string;
  cnpj: string;
  address: string;
  whatsApp: string;
  whatsAppUrl: string;
  mapsUrl: string;
}

export type ModalType = 'privacy' | 'terms' | null;
