export const firstTestUtil = () => ({
  success: 'true',
})

// ----------校验validate-----------------

export const isHttpsMailtoTel = (path) => /^(https?:mailto:|tel)/.test(path)
