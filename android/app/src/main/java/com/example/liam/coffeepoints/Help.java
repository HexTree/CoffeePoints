package com.example.liam.coffeepoints;

import android.graphics.Typeface;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class Help extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //sets the main layout of the activity
        setContentView(R.layout.activity_help);
        TextView txt = (TextView) findViewById(R.id.textHelp);
        Typeface font = Typeface.createFromAsset(getAssets(), "Chantelli_Antiqua.ttf");
        txt.setTypeface(font);
    }
}
