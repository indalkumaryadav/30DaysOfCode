import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("Indal"),
          backgroundColor: Colors.red,
        ),
        body: Container(
          height: 50,
          child: ListView(
              scrollDirection: Axis.horizontal,
              padding: EdgeInsets.all(16.0),
              children: [
                  Text("Indal Kumar"),
                  SizedBox(height: 20,),
                  Text("Indal Kumar"),
                  SizedBox(height: 20,),
                  Text("Indal Kumar"),
                  Text("Indal Kumar"),
                  Text("Indal Kumar"),
                  Text("Indal Kumar"),
              ],
          ),
        )
      ),
    );
  }
}