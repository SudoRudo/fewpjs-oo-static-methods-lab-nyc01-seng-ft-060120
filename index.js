class Formatter {
  static capitalize(string){
    string.toUpperCase();
  }
  
  static sanitize(string){
    string.replace(/[^A-Za-z0-9-' ]+/g, '' )
  }
}