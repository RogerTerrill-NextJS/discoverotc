import { DescriptionType } from '@/data/types';

export function toCamelCase(str: string): string {
  return str
    ?.toLocaleLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, chr) =>
      chr.toUpperCase(),
    ) as DescriptionType;
}

export function toSnakeCase(str: string): string {
  return str
    ?.toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') as DescriptionType;
}

export function getYoutubeId(url: string): string {
  return url.split('/').pop() ?? '';
}
