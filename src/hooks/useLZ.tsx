import { useSafeCallback } from './useSafe';
import { lzObject } from 'lz-object';

export const useLZObject = ({
  output,
}: {
  output: 'uint8array' | 'utf16' | 'base64' | 'uri';
}) => {
  let compress = useSafeCallback((value: { [key: string]: any }) => {
    return lzObject.compress(value, { output });
  });

  let decompress = useSafeCallback((value: { [key: string]: string }) => {
    return lzObject.decompress(value, { output });
  });

  return [compress, decompress];
};
