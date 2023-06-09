'use strict';

class Element {
    constructor(tagName) {
      this.tagName = tagName
      // reference to other elements
      this.parent = null
      this.children = []
      this.prev = null
      this.next = null
    }

    render() {
        let childFragment = ``
        this.children.forEach(child => childFragment += child.render())
        
        return `<${this.tagName}>${childFragment}</${this.tagName}>`
    }

    appendChild( child ){
        if( child  instanceof Element) {
          this.children.push(child);
        } else {
            console.error('Only objects of type Element can be assigned !!!')
        }
    }

   removeChild( child ){
      if( child  instanceof Element) {
         
        for(let index = 0; index < this.children.length; index++ ){
          
          if(Object.is(this.children[index],child)) {
            this.children.splice(index,1);
          } 
        }
      } 
      else {
            console.error('Only objects of type Element can be removed !!!');        
      }  
  }
}

  // let root = new Element("html")
  
  // root.children.push(new Element("head"))
  // //root.children.push(new Element("body"))

  // //let h1 = new Element("h1");
  // //root.children[1].appendChild(h1);


  // console.log(root.render())

  let parent = new Element("div")
  let h1 = new Element("h1")
  parent.appendChild(h1)
  parent.appendChild(new Element("p"))
  parent.removeChild(h1)
  //parent.removeChild(new Element("p"))
  
  console.log(parent.render())
