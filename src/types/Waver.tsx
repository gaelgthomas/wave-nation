import Wave from '@/types/Wave';

export default interface Waver {
  walletAddress: string;
  lastWavedAt: number | Date;
  count?: number;
  waves: Wave[];
}
