import swagger from "./Swagger.json";
const paths = {};

let DatVe = [],
  NguoiDung = [],
  Phim = [],
  Rap = [];
for (const key in swagger.paths) {
  let method = Object.keys(swagger.paths[key])[0];
  let tags = Object.values(swagger.paths[key])[0].tags[0];
  let object = { method, path: key, name: key.split("/")[3] };
  switch (tags) {
    case "QuanLyDatVe": {
      DatVe.push(object);
      break;
    }
    case "QuanLyNguoiDung": {
      NguoiDung.push(object);
      break;
    }
    case "QuanLyPhim": {
      Phim.push(object);
      break;
    }
    case "QuanLyRap": {
      Rap.push(object);
      break;
    }
    default:
      break;
  }
  paths.DatVe = DatVe;
  paths.NguoiDung = NguoiDung;
  paths.Rap = Rap;
  paths.Phim = Phim;
}
export default paths;
