import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;
  const ip = req.socket.remoteAddress
  const now = new Date()
  
  if (req.method === "POST") {
    // Process a POST request

    if (email === "itp21101@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({
        email: "itp21101@hua.gr",
        username: "itp21101",
        first_name: "ΑΠΟΣΤΟΛΟΣ",
        last_name: "ΑΓΓΕΛΗΣ",
        title: "Μεταπτυχιακός Φοιτητής",
        department: "Πληροφορικής και Τηλεματικής",
      })
      return;
    } else if (email === "itp21100@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({
        email: "itp21100@hua.gr",
        username: "itp21100",
        first_name: "ΒΑΣΙΛΗΣ",
        last_name: "ΗΛΙΟΥ",
        title: "Μεταπτυχιακός Φοιτητής",
        department: "Πληροφορικής και Τηλεματικής",
      })
      return;
    } else if (email === "itp22044@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({
        email: "itp22044@hua.gr",
        username: "itp22044",
        first_name: "ΔΗΜΗΤΡΙΟΣ",
        last_name: "ΠΑΠΑΓΕΩΡΓΙΟΥ",
        title: "Προπτυχιακός Φοιτητής",
        department: "Πληροφορικής και Τηλεματικής",
      })
      return;
    } else if (email === "itp22039@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({
        email: "itp22039@hua.gr",
        username: "itp22039",
        first_name: "ΕΥΑΓΓΕΛΟΣ",
        last_name: "ΓΕΩΡΓΙΟΥ",
        title: "Προπτυχιακός Φοιτητής",
        department: "Πληροφορικής και Τηλεματικής",
      })
      return;
    } else if (email === "tsadimas@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({
        email: "tsadimas@hua.gr",
        username: "tsadimas",
        first_name: "ΑΝΑΡΓΥΡΟΣ",
        last_name: "ΤΣΑΔΗΜΑΣ",
        title: "Διδακτικό Προσωπικό",
        department: "Πληροφορικής και Τηλεματικής",
      })
      return;
    } else if (email === "ifigenia@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({          
        email: "ifigenia@hua.gr",
        username: "ifigenia",
        first_name: "ΙΦΙΓΕΝΕΙΑ",
        last_name: "ΒΑΡΔΑΚΩΣΤΑ",
        title: "Bιβλιοθηκάριος",
        department: "Βιβλιοθήκη και Κέντρο Πληροφόρησης",
      }); 
      return;
    } else if (email === "mitsi@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({          
        email: "mitsi@hua.gr",
        username: "mitsi",
        first_name: "ΛΟΡΕΤΑ",
        last_name: "ΜΗΤΣΗ",
        title: "Διοικητική Υπάλληλος",
        department: "Γραμματεία Τμήματος Πληροφορικής και Τηλεματικής",
      }); 
      return;
    } else if (email === "daneli@hua.gr" && password === "1234") {
      console.log(`${ip} - [${now}] - dummy LDAP endpoint success - ${email}`);
      res.json({          
        email: "daneli@hua.gr",
        username: "daneli",
        first_name: "ΦΩΤΕΙΝΗ",
        last_name: "ΔΕΝΕΛΗ",
        title: "Διοικητική Υπάλληλος",
        department: "Γραμματεία Τμήματος Πληροφορικής και Τηλεματικής",
      }); 
      return;
    } else if ( !email || !password ) {
      console.error(`${ip} - [${now}] - dummy LDAP endpoint failure - - No email and/or password provided`);
      res.status(400).json({ message: "No email and/or password provided." });
      return;
    } else {
      console.error(`${ip} - [${now}] - dummy LDAP endpoint failure - ${email} - Wrong credentials provided`);
      res.status(401).json({ message: "Wrong credentials provided." });
      return;
    }

  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", "POST");
    console.error(`${ip} - [${now}] - dummy LDAP endpoint failure - - Bad HTTP method`);
    res.status(400).json({ message: "Bad HTTP method." });
    return;
  }
  
}

