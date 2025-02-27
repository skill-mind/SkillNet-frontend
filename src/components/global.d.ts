// global.d.ts
declare module '@argent/get-starknet' {
    export interface StarknetProvider {
      enable: () => Promise<void>;
      selectedAddress: string;
      // Include any other methods or properties you plan to use
    }
  
    export interface GetStarknetOptions {
      id: string;
    }
  
    export function getStarknet(options?: GetStarknetOptions): Promise<StarknetProvider | undefined>;
  }
  