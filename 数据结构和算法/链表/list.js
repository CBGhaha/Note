export class ListNode{
  constructor(key,value){
      this.key=key;
      this.value=value;
      this.nextNode=null;
      this.preNode=null;
  }   
}


// 双向链表
export default class List{
  constructor(){
      this.head=null;
      this.last=null;

  }
  insertNode(node, positionNodeKey){
      //如果链表有头部节点 那么将原头部节点的前一个节点指向node
      if(positionNodeKey){
         const positionNode = this.searchNode(positionNodeKey);
         if(positionNode!==this.last){
          positionNode.nextNode = node;
          nextNode.preNode = positionNode;
          node.nextNode = positionNode.nextNode;
          return;
         }
      }
      if(!this.head){
          this.head  = this.last = node;
      }else{
          this.last.nextNode = node;
          node.preNode = this.last;
          this.last = node;
      }
  }
  searchNode(key){
      let node=this.head;
      while(node.key!==key&&node){
          node=node.nextNode;
      }
      return node;
  }
  delete(node){
      const {preNode,nextNode}=node;
      preNode&&(preNode.nextNode=nextNode);
      nextNode&&(nextNode.preNode=preNode);
  }

}

export class SingListNode{
  constructor(key,value){
      this.key=key;
      this.value=value;
      this.nextNode=null;
  }   
}

export class SingleList {
  constructor(){
      this.head=null;
      this.last=null;

  }
  insertNode(node, positionNodeKey){
      //如果链表有头部节点 那么将原头部节点的前一个节点指向node
      if(positionNodeKey){
         const positionNode = this.searchNode(positionNodeKey);
         if(positionNode!==this.last){
          positionNode.nextNode = node;
          node.nextNode = positionNode.nextNode;
          return;
         }
      }
      if(!this.head){
          this.head  = this.last = node;
      }else{
          this.last.nextNode = node;
          this.last = node;
      }
  }
  searchNode(key){
      let node=this.head;
      while(node.key!==key&&node){
          node=node.nextNode;
      }
      return node;
  }
  delete(key){
    let node = this.head;
    let preNode = null;
    let nextNode  = node.preNode
    while(node.key!==key && node){
        preNode = node;
        node = node.nextNode;
        nextNode = node.nextNode;
    }
    if(node){
      preNode.nextNode = nextNode;
    }
  }

}