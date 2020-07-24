class Formatter {
  static capitalize(string){
    return string.toUpperCase();
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '' )
  }
  
  static titleize(string){
    
  }
}