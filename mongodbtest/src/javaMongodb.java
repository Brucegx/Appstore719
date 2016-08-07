import java.net.UnknownHostException;
import java.util.List;
import java.util.Set;

import com.mongodb.*;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoClient;
import com.mongodb.util.JSON;
import com.sun.javadoc.SeeTag;

/**
 * Created by guoxi on 8/4/16.
 */
public class javaMongodb {
    public static void main(String[] args) {
        // build a mongodb testcase
        Mongo mongo = new Mongo();

        //find all of the database
        List<String> dbName = mongo.getDatabaseNames();
        for (String name : dbName){
            System.out.println(name);
        }
        //build a connection to related db (test)
        DB test = mongo.getDB("test");
        //find && print all colleciton in the test db
        Set<String> collName = test.getCollectionNames();//we already used the test db
        for (String name : collName){
            System.out.print(name);
        }
        //print the data
        DBCollection name = test.getCollection("restaurants");//get the conncetion to Coll restaurants
        DBCursor cur = name.find();
        while (cur.hasNext()){
            DBObject object = cur.next();//object=>"{grade:"A"}"
            System.out.println(object.get("name"));
        }


    }
}
