/**
 * @file Preprocessor.js
 * @author andreas.karner@student.tugraz.at
 * 
 * @description
 *  Preprocessor JS module, uses CommonJS structure
 * 
 *  Please run prepareXml before parsing it
 *    it will resolve all referneces first from the xml
 */

const ROOT_TAG = 'program';
const OBJECT_TAG = 'object';
const REF_ATTR = 'reference';

/**
 * Prepare xml
 * @param {dom|string} xml to prepare
 * @return dom
 */
export const prepareXml = (xml) => {
  const derefProgramm = deReference(xml);

  return derefProgramm;
};

/**
 * Dereference verything in the xml
 * @param {*} xml 
 */
const deReference = (xml) => {
  derefObjects(xml);
  // #TODO: derefScripts
  //        derefBlocks

  return xml;
};

/**
 * Dereference objects refs
 * @param {*} xml 
 */
const derefObjects = (xml) => {
  let objRefs = xpathToArray(`//${OBJECT_TAG}[@${REF_ATTR}]`, xml, xml); //(xml.evaluate(, xml.firstChild, null, XPathResult.ANY_TYPE, null));

  if (objRefs.length === 0) {
    return;
  }

  let nodesToPurge = [];

  // process all found object refs
  objRefs.forEach(objRef => {
    let refPath = objRef.getAttribute(REF_ATTR);
    let refPayload = xml.evaluate(refPath, objRef, null, XPathResult.ANY_TYPE, null).iterateNext();

    // clone if exists the reference part
    if (refPayload === null) {
      console.error('Failed to find reference payload for derefObject');
    } else {
      for (let idx = 0; idx < refPayload.children.length; idx++) {
        let childClone = refPayload.children[idx].cloneNode(true);
        objRef.appendChild(childClone);
      }
      objRef.removeAttribute(REF_ATTR);
      nodesToPurge.push(refPayload);
    }
  });

  // remove the reference parts
  nodesToPurge.forEach(node => {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  });
}

/**
 * Evaluate xPath and store result into an array
 * @param {*} xpath 
 * @param {*} xml 
 * @param {*} node 
 */
const xpathToArray = (xpath, xml, node) => {
  var result = [];
  var xPathRes = xml.evaluate(xpath, node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
  var actualSpan = xPathRes.iterateNext();
  while (actualSpan) {
    result.push(actualSpan);
    actualSpan = xPathRes.iterateNext();
  }
  return (result);
}