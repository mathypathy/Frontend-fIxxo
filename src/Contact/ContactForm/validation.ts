export interface IForm{
    name: string | null, 
    email: string | null, 
    comments: string | null
}
export interface IError{
    name:string | null;
    email:string | null;
    comments:string | null;
}

export const validate = (e:any, form: IForm) => {
    const errors:IError= {
        name: null,
        email: null,
        comments: null
    } 
   if (e.type === 'submit') {
    
    
    errors.name = validate_name(form.name)
    errors.email = validate_email(form.email)
    errors.comments = validate_comments(form.comments)

    return errors
   } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return {
                    ...errors,
                    [id]: validate_name(value)
                } 
            case 'email':
                return {
                    ...errors,
                    [id]: validate_email(value)
                } 
            case 'comments':
                return {
                    ...errors,
                    [id]: validate_comments(value)
                } 
        }
   }

}


const validate_name = (value: string |null) => {
    if (!value)
        return 'A name is required'
    else if (value.length < 2)
        return 'Must be a valid name'
    else
        return null
}

const validate_email = (value: string |null) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address'
    else
        return null
}

const validate_comments = (value: string |null) => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 5)
        return 'Your comment must be at least 5 characters long'
    else
        return null
}