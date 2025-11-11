// ABI type definitions
export interface ABIFunction {
  type: 'function';
  name: string;
  inputs: ABIParameter[];
  outputs: ABIParameter[];
  stateMutability: 'pure' | 'view' | 'nonpayable' | 'payable';
  constant?: boolean;
}

export interface ABIEvent {
  type: 'event';
  name: string;
  inputs: ABIEventParameter[];
  anonymous?: boolean;
}

export interface ABIParameter {
  name: string;
  type: string;
  internalType?: string;
  components?: ABIParameter[];
}

export interface ABIEventParameter extends ABIParameter {
  indexed?: boolean;
}

export type ABIItem = ABIFunction | ABIEvent | {
  type: 'constructor' | 'fallback' | 'receive' | 'error';
  [key: string]: any;
};

export type ABI = ABIItem[];

export interface SelectedItem {
  type: 'function' | 'event';
  name: string;
  item: ABIFunction | ABIEvent;
}

