const not_found = (collection) => { return { info: { info: `ไม่พบข้อมูลใน ${collection}` }, status: 404 } }

const bad_data = { info: { info: `ข้อมูลไม่ถูกต้อง` }, status: 400 }

const exception_author = { info: { info: `กรุณากรอก login ก่อนใช้งานระบบ` }, status: 401 }

const exception_service = { info: { info: `กรุณาติดต่อเจ้าหน้าที่เพื่อประสานงาน` }, status: 500 }


module.exports = {
    not_found, bad_data, exception_author, exception_service
}