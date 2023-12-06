import React from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Item, ItemContent, Label, Segment } from "semantic-ui-react";

interface Props {
    activites: Activity[];
    selectActivity: (id: string) => void;
}

export default function ActivityList({activites, selectActivity} : Props){
    return (
        <Segment>
            <Item.Group divided>
                {activites.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                                <Item.Header as="a">{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.title}</div>
                                    <div>{activity.city}, {activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={() => selectActivity(activity.id)} floated="right" content="View" color="blue"/>
                                    <Label basic content={activity.category} />
                                </Item.Extra>
                        </ItemContent>
                    </Item>                    
                ))}
            </Item.Group>
        </Segment>
    )
}