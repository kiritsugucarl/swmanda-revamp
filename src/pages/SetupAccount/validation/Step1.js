import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    gender: yup.string().required('Gender is required'),
    birthPlace: yup.string().required('Birthplace is required'),
    nationality: yup.string().required('Nationality is required'),
    governmentID: yup
        .mixed()
        .test('required', 'You need to provide a file', (value) => {
            return value && value.length;
        })
        .test('fileSize', 'The file is too large', (value, context) => {
            return value && value[0] && value[0].size <= 200000;
        })
        .test('type', 'We only support jpeg', function (value) {
            return value && value[0] && value[0].type === 'image/jpeg';
        }),
        municipality: yup.string().required('Municipality is required'),
        barangay: yup.string().required('Barangay is required'),
        unitNum: yup.string(),
        houseNum: yup.string(),
        streetName: yup.string(),
        block: yup.string(),
        building: yup.string(),
        zipCode: yup.string().required('Zip Code is required')
});
