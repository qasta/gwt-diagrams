[![](http://gwt-diagrams.googlecode.com/files/screenshot.gif)](http://kolos.math.uni.lodz.pl/~balon/gwt-diagrams-demo/)

## Summary ##

**gwt-diagrams** is GWT library which provides diagramming capability to web applications.

Demo is available [here](http://kolos.math.uni.lodz.pl/~balon/gwt-diagrams-demo/).

## Notes ##
  * 02.10.2008: gwt-diagrams 0.2-RC00 is now available for [download](http://code.google.com/p/gwt-diagrams/downloads/list), requires GWT 1.5. Work on stable release version is in progress ...

  * 13.03.2008: there are some delays in development of 0.2 version. Actual preview is still [here](http://kolos.math.uni.lodz.pl/~balon/gwt-diagrams-preview/).
> 0.2.RC01 is expected till end of March and stable 0.2 release is expected at end of April.

  * 20.01.2008: development of 0.2 release is pending. You can preview demo snapshot of immature version [here](http://kolos.math.uni.lodz.pl/~balon/gwt-diagrams-preview/)

  * 01.01.2008: gwt-diagrams 0.1 is now available for [download](http://code.google.com/p/gwt-diagrams/downloads/list) :)

  * 01.01.2008: 0.1 was tested on: IE6, IE7, FF2.0 (win), Opera 9 (win), Safari 3 (win). Recent [CrossBrowserRaport](CrossBrowserRaport.md)

  * 12.2007: known issue: straight/bezier connections doesn't work in **hosted mode on linux** (gecko 1.7) [more](http://code.google.com/p/gwt-diagrams/issues/detail?id=12)

## Hello world example ##
```
public class ExampleEntryPoint implements EntryPoint {

    public void onModuleLoad() {

        // elements to connect
        Widget label1 = new Label("Hello");
        Widget label2 = new Label("world");
        RootPanel.get().add(label1, 100, 100);
        RootPanel.get().add(label2, 200, 200);

        // gwt-diagrams stuff
        Connector c1 = UIObjectConnector.wrap(label1);
        Connector c2 = UIObjectConnector.wrap(label2);
        Connection connection = new RectilinearTwoEndedConnection(c1, c2);
        connection.appendTo(RootPanel.get());

    }
}
```
![http://gwt-diagrams.googlecode.com/files/helloworld.gif](http://gwt-diagrams.googlecode.com/files/helloworld.gif)

[more code examples](http://code.google.com/p/gwt-diagrams/wiki/CodeExamples)

## Conceptions ##

| **Connector**    | sth. that can be conneted with another Connector |
|:-----------------|:-------------------------------------------------|
| **Connection**   | UI widget representing connection eg. line between two Connectors |
| **Direction**    | UP, DOWN, LEFT, RIGHT - direction in which Connection can grow from Connector |
| ConnectionData | internal structure representing connection. It is internaly computed by  ConnectonDataCalculator |
