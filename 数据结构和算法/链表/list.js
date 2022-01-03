export class ListNode{
  constructor(key,val){
      this.key=key;
      this.val=val;
      this.next=null;
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
          positionNode.next = node;
          next.preNode = positionNode;
          node.next = positionNode.next;
          return;
         }
      }
      if(!this.head){
          this.head  = this.last = node;
      }else{
          this.last.next = node;
          node.preNode = this.last;
          this.last = node;
      }
  }
  searchNode(key){
      let node=this.head;
      while(node.key!==key&&node){
          node=node.next;
      }
      return node;
  }
  delete(node){
      const {preNode,next}=node;
      preNode&&(preNode.next=next);
      next&&(next.preNode=preNode);
  }

}

export class SingListNode{
  constructor(key,val){
      this.key=key;
      this.val=val;
      this.next=null;
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
          positionNode.next = node;
          node.next = positionNode.next;
          return;
         }
      }
      if(!this.head){
          this.head  = this.last = node;
      }else{
          this.last.next = node;
          this.last = node;
      }
  }
  searchNode(key){
      let node=this.head;
      while(node.key!==key&&node){
          node=node.next;
      }
      return node;
  }
  delete(key){
    let node = this.head;
    let preNode = null;
    let next  = node.preNode
    while(node.key!==key && node){
        preNode = node;
        node = node.next;
        next = node.next;
    }
    if(node){
      preNode.next = next;
    }
  }

}