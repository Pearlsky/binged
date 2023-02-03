// utility function to customize firebase auth error response msg
export const errorStringify = (string) =>
  string.slice(22, -2).replaceAll("-", " ");
