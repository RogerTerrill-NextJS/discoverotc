/** Public assets in the existing discoverotc-assets R2 bucket. */
const ASSET_BASE_URL = 'https://cdn.discoverotc.com';

export function getAssetUrl(path: string): string {
  return `${ASSET_BASE_URL}/${path.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/')}`;
}
