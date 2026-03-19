export interface Property {
  id: number;
  price: bigint;
  propType: string;
  category: string;
  owner: string;
  isSold: boolean;
  isListed: boolean;
  warranty: string;
}

export interface PropertyFormData {
  amount: string;
  propType: string;
  category: string;
  warranty: string;
}

export type ModalType =
  | 'createProperty'
  | 'buyProperty'
  | 'listProperty'
  | 'unlistProperty'
  | 'deleteProperty'
  | 'approveToken'
  | null;

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

export interface AppContextType {
  isConnected: boolean;
  address: string | undefined;
  isOwner: boolean;

  properties: Property[];
  listedProperties: Property[];
  isLoadingProperties: boolean;

  selectedPropertyId: number | null;
  setSelectedPropertyId: (id: number | null) => void;

  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;

  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;

  filterType: string;
  filterCategory: string;
  filterPrice: string;
  setFilterType: (v: string) => void;
  setFilterCategory: (v: string) => void;
  setFilterPrice: (v: string) => void;

  refreshProperties: () => void;
}