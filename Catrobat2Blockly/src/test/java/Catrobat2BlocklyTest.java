package test.java;

import org.junit.Assert;
import org.junit.Test;
import tools.Parser;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Collectors;

public class Catrobat2BlocklyTest {

    private String inputFile;
    private String referenceFile;

    private static String outputFile = "src/test/resources/output/output.xml";

    private void runParser(String inputFile, String outputFile) throws IOException {
        Parser parser = new Parser();
        parser.parseFile(inputFile);
        parser.write(outputFile);
    }

    private static String readFile(String path, Charset encoding) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return new String(encoded, encoding);
    }

    private static String prepareStringBeforeCompare(String xmlString) {
        xmlString = xmlString.replaceAll("\t", "");
        xmlString = xmlString.replaceAll("\n", "");

        return xmlString;
    }

    private void compareFiles(String output, String reference) throws IOException {
        String outputXML = readFile(outputFile, StandardCharsets.UTF_8);
        String referenceXML = readFile(referenceFile, StandardCharsets.UTF_8);

        outputXML = prepareStringBeforeCompare(outputXML);
        referenceXML = prepareStringBeforeCompare(referenceXML);

        Assert.assertEquals(outputXML, referenceXML);
    }

    @Test
    public void oneBrickTest() throws IOException {
        referenceFile = "src/test/resources/ref/oneBrick.xml";
        inputFile = "src/test/resources/input/oneBrick.xml";

        runParser(inputFile, outputFile);

        compareFiles(outputFile, referenceFile);
    }
}