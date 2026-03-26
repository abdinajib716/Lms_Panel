import { usePage } from "@inertiajs/react";
function useLang() {
  const { props } = usePage();
  return props.translate;
}
export {
  useLang as u
};
