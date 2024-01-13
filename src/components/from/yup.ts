// @ts-ignore
export const yupValidate = async (schema: object, value: object) => {
    const validationErrors = {};
  
    try {
      // @ts-ignore
      await schema.validate(value, { abortEarly: false });
      return null;
    } catch (err) {
      // @ts-ignore
      if (err?.inner) {
        // @ts-ignore
        err.inner.forEach((e) => {
          // @ts-ignore
          validationErrors[e.path] = e.message;
        });
      }
      return validationErrors;
    }
  };
  