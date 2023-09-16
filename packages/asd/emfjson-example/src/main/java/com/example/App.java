package com.example;

import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.emfjson.jackson.resource.JsonResourceFactory;

import java.io.IOException;
import java.util.Objects;

public class App {

    public static final String INPUT = "ui.ecore";
    public static final String OUTPUT = "ui.json";
    public static void main( String[] args ) {
      ResourceSet resourceSet = new ResourceSetImpl();

      resourceSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put("ecore", new XMIResourceFactoryImpl());
      resourceSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put("json", new JsonResourceFactory());

      ClassLoader classLoader = App.class.getClassLoader();
      URI modelUri = URI.createURI(Objects.requireNonNull(classLoader.getResource(INPUT)).toString());
      Resource modelResource = resourceSet.getResource(modelUri, true);

      EObject rootObject = modelResource.getContents().get(0);

      String outputDirectory = "target/generated-sources";
      URI jsonUri = URI.createFileURI(outputDirectory + "/" + OUTPUT);

      Resource jsonResource = resourceSet.createResource(jsonUri);
      jsonResource.getContents().add(rootObject);
      try {
        jsonResource.save(null);
        System.out.println("Model serialized to JSON successfully.");
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
}
