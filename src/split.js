export default function () {
  import('./exportDefault.js').then(({ default: obj }) => console.log(obj));
}