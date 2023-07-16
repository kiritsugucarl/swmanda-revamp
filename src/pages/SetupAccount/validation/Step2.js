import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    mothersName: yup.string().required("Mother's Name is required"),
    mothersOccupation: yup.string().required("Mother's Occupation is required"),
    mothersBirthday: yup.date().required("Mother's Birthday is required"),
    fathersName: yup.string().required("Father's Name is required"),
    fathersOccupation: yup.string().required("Father's Occupation is required"),
    fathersBirthday: yup.date().required("Father's Birthday is required"),
    siblings: yup.array(),

    civilStatus: yup.string().required('Civil Status is required'),
    spouseName: yup.string(),
    spouseOccupation: yup.string(),
    spouseBirthday: yup.date(),
    children: yup.array()
});
