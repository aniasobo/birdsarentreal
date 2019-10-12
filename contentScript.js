// source and inspiration: this script https://is.gd/5C5GHb

function walk(rootNode) {
  var walker = document.createTreeWalker(rootNode, // root node of the TreeWalker traversal
                                          NodeFilter.SHOW_TEXT, // show text nodes
                                          null, // don't filter the found text nodes
                                          false); // don't expand entity references
  var node;

  while (node = walker.nextNode()) {
    if (node.tagName === 'input' || node.tagName === 'textarea') {
      return
    } else if (node.isContentEditable || (node.parentNode && node.parentNode.isContentEditable)) { // Gmail 
      return 
    } else {
    handleText(node);
    }
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;

  // Bird
  v = v.replace(/\bBird\b/g, "Government Drone");
  v = v.replace(/\bBirds\b/g, "Government Drones");
  v = v.replace(/\bbird\b/g, "government drone");
  v = v.replace(/\bbirds\b/g, "government drones");

  // Aves
  v = v.replace(/\b[Aa]ves\b/g, "so-called 'birds' (government drones)");
  v = v.replace(/\b[Aa]vis\b/g, "so-called 'bird' (government drone)");

  // Avian 
  v = v.replace(/\b[Aa]vian\b/g, "related to so-called 'birds' (i.e. government drones)");

  // Songbird
  v = v.replace(/\bsongbird\b/g, "the 'songbird' type of government drone");
  v = v.replace(/\bsongbirds\b/g, "government drones of the 'songbird' variety");

  // Shout out to my birders
  v = v.replace(/\b[Kk]ir[kt]land [Ww]arbler\b/g, "Kirtland's warbler");
  v = v.replace(/\[Kk]ir[kt]land [Ww]arblers\b/g, "Kirtland's warblers");

  // Corvids, parrots, seagull, pigeon
  v = v.replace(/\bcorvid\b/g, "the 'corvid' model of government drone");
  v = v.replace(/\bcorvids\b/g, "government drones of the 'corvid' variety");
  v = v.replace(/\bparrot\b/g, "the 'parrot' model of government drone");
  v = v.replace(/\bparrots\b/g, "government drones of the 'parrot' variety");
  v = v.replace(/\b[Ss]eagull\b/g, "the 'Seagull' drone");
  v = v.replace(/\b[Ss]eagulls\b/g, "marine government drones from the 'seagull' line");
  v = v.replace(/\bpigeon\b/g, "the 'songbird' type of government drone");
  v = v.replace(/\bsongbirds\b/g, "government drones of the 'songbird' variety");


  // Ornithology 
  v = v.replace(/\bOrnithology\b/g, "The 'Study' of 'Birds'");
  v = v.replace(/\bornithology\b/g, "pseudoscience created by the government");

 textNode.nodeValue = v;
}

function walkTheDoc(doc) {
  const documentTitle = doc.getElementsByTagName('title')[0]; 

  walk(doc);
  documentTitle = handleText(documentTitle);
}

walkTheDoc(document);

// test with text input and textarea