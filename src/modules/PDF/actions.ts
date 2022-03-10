export const PDF_INIT = 'PDF_INIT' as const;
export const PDF_ERROR = 'PDF_ERROR' as const;
export const PDF_SUCCESS = 'PDF_SUCCESS' as const;

export function PDFInit(payload) {
  return {
      type: PDF_INIT,
      payload
  };
}

export function PDFError(error) {
  return {
      type: PDF_ERROR,
      error,
  };
}

export function PDFSuccess(payload) {
  return {
      type: PDF_SUCCESS,
      payload
  };
}

export type GetPDFActionsType =
  | ReturnType<typeof PDFInit>
  | ReturnType<typeof PDFError>
  | ReturnType<typeof PDFSuccess>