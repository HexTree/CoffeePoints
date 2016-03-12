package com.example.liam.coffeepoints;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Rect;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.support.v4.content.ContextCompat;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class MenuAdapter extends BaseAdapter {

    Context cntext;

    // menu is hardcoded as follows:
    int count = 4;
    String[] titles = {"Points", "Redeem", "Coffee", "Help"};
    int[] icons = {R.drawable.points, R.drawable.redeem, R.drawable.coffee, R.drawable.help};

    MenuAdapter(Context context)
    {
        cntext = context;
    }

    public class Button
    {
        Drawable icon;
        CharSequence title;
    }

    @Override
    public int getCount() {
        return count;
    }

    @Override
    public Button getItem(int position) {
        Button obj = new Button();
        obj.title = titles[position];
        obj.icon = ContextCompat.getDrawable(cntext, icons[position]);
        return obj;
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        TextView tv;
        final Button data = getItem(position);

        if (convertView == null) {

            tv = new TextView(cntext);
            tv.setGravity(Gravity.CENTER);

        } else {
            tv = (TextView) convertView;
        }


        CharSequence title = data.title;
        tv.setText(title);
        Rect bounds = new Rect();
        tv.getPaint().getTextBounds(tv.toString(), 0, tv.length(), bounds);
        int tvheight = Math.abs(bounds.top - bounds.bottom);

        Drawable icon = data.icon;
        int width = parent.getWidth();
        int height = parent.getHeight();
        Log.w("test", "dimensions: " + width + " " + height + " " + bounds.top + " " + bounds.bottom);
        int side = Math.min(width, height - 2*tvheight);
        side = side/2;

        Bitmap bitmap = ((BitmapDrawable) icon).getBitmap();
        // Scale to fit
        Drawable d = new BitmapDrawable(cntext.getResources(), Bitmap.createScaledBitmap(bitmap, side, side, true));

        tv.setCompoundDrawablesWithIntrinsicBounds(null, d, null, null);

        tv.setTag(data);

        return tv;
    }

}